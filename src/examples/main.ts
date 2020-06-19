import { singleBlock } from "./singleBlock";
import { exampleUseOfSubscribeWithLogging } from "./subscribe";

/**
 * If this is your first time using this repo, checkout `singleBlock`. It is
 * a good starting and probably the quickest example to get up and running.
 */
async function main(): Promise<void> {
  // const sidecarUrl = "http://127.0.0.1:8080/";
  const sidecarUrl = "http://127.0.0.1:6262/";
  // const wsUrl = "wss://rpc.polkadot.io";
  const wsUrl = "wss://kusama-rpc.polkadot.io/";

  // await exampleUseOfSubscribeWithLogging(sidecarUrl, wsUrl);

  await singleBlock(79, sidecarUrl, wsUrl);
  // await singleBlock(2773005, sidecarUrl, wsUrl);
}

main().catch(console.log);
