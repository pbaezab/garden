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
  clientAuthToken,
  environmentName,
}: GetSecretsParams) {
  try {
    const res = await got(`${platformUrl}/secrets/project/name/${projectConfig.name}/env/${environmentName}`,
     {headers: {"x-access-auth-token": clientAuthToken}}).json<GotResponse<any>>()
    if (res && res["status"] === "success") {
      return res["data"]
    }
    return {}
  } catch (err) {
    log.error("An error occurred while fetching secrets for the project.")
    return {}
  }
}
