import { RewardEpochFinalized } from "./generated/RewardEpoch/IFtsoManager";
import { RewardsDistributed } from "./generated/TestCounter/IFtsoRewardManager";
import { RewardEpoch } from "./generated/schema";

export function handleFinalizedRewardEpoch(event: RewardEpochFinalized): void {
  let rewardEpoch = RewardEpoch.load('0')
  if (rewardEpoch == null) {
    rewardEpoch = new RewardEpoch('0')
    rewardEpoch.number = 0
  } else {
    rewardEpoch.number = rewardEpoch.number + 1
  }
  rewardEpoch.save()
}

export function handleRewardsDistributed(event: RewardsDistributed): void {
  let rewardEpoch = RewardEpoch.load('0')
  if (rewardEpoch == null) {
    rewardEpoch = new RewardEpoch('0')
    rewardEpoch.number = 0
  }
  else {
    rewardEpoch.number = rewardEpoch.number + 1
  }
  rewardEpoch.save()
}