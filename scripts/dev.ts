import { iifObject } from 'iif-ts'
import { runCommand } from '@clscripts/cl-common'
import { Expo, startModePlatform, ExpoOpts } from '@clscripts/expo'

const platform = process.argv.slice(2) as unknown as startModePlatform | undefined

runCommand(
  new Expo({
    mode: 'start',
    ...iifObject<Partial<ExpoOpts>>(!!platform, { platform }),
  }).command
)
