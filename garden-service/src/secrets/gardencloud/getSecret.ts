/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { got, GotResponse } from "../../util/http"
import { GetSecretsParams } from ".."

export async function getSecretsFromGardenCloud({
  log,
  projectConfig,
  platformUrl,
  environmentName,
}: GetSecretsParams) {
  try {
    const res = await got(`${platformUrl}/${projectConfig.name}/env/${environmentName}`).json<GotResponse<any>>()

    if (res && res.statusCode === 200 && res.body && res.body.status === "success") {
      return res.body["data"]
    }
    return {}
  } catch (err) {
    log.error("An error occurred while fetching secrets for the project.")
    log.error(err)
    return {}
  }
}
