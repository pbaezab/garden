/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { getSecretsFromGardenCloud } from "./gardencloud/getSecret"
import { ProjectConfig } from "../config/project"
import { LogEntry } from "../logger/log-entry"

export interface GetSecretsParams {
  log: LogEntry
  projectConfig: ProjectConfig
  clientAuthToken: string
  platformUrl: string
  environmentName: string
}

export async function getSecrets(params: GetSecretsParams) {
  const secrets = await getSecretsFromGardenCloud(params)
  return secrets
}
