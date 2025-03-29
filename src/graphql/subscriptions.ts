/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateHireSmartItem = /* GraphQL */ `subscription OnCreateHireSmartItem(
  $filter: ModelSubscriptionHireSmartItemFilterInput
  $owner: String
) {
  onCreateHireSmartItem(filter: $filter, owner: $owner) {
    pk
    sk
    tenantId
    entityType
    data {
      Name
      SSOProvider
      TenantId
      RoleStatus
      CulturalValueStatus
      CompetencyStatus
      Category
      PositionStatus
      CandidateNumber
      Status
      ResumeURL
      LinkedInURL
      ActivityCategory
      StartTime
      RawData
      AISummary
      Vote
      Feedback
      FacilitatorId
      HiringManagerId
      InterviewCategory
      ScreeningVote
      AssessmentType
      InterviewerRole
      Text
      Source
      QuestionStatus
      QuestionCreatedDate
      QuestionLastUpdated
      RoleType
      CombinedAISummary
      FinalDecision
      EvidenceCategory
      EvidenceText
      URL
      Duration
      ExerciseResponse
      Date
      __typename
    }
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateHireSmartItemSubscriptionVariables,
  APITypes.OnCreateHireSmartItemSubscription
>;
export const onUpdateHireSmartItem = /* GraphQL */ `subscription OnUpdateHireSmartItem(
  $filter: ModelSubscriptionHireSmartItemFilterInput
  $owner: String
) {
  onUpdateHireSmartItem(filter: $filter, owner: $owner) {
    pk
    sk
    tenantId
    entityType
    data {
      Name
      SSOProvider
      TenantId
      RoleStatus
      CulturalValueStatus
      CompetencyStatus
      Category
      PositionStatus
      CandidateNumber
      Status
      ResumeURL
      LinkedInURL
      ActivityCategory
      StartTime
      RawData
      AISummary
      Vote
      Feedback
      FacilitatorId
      HiringManagerId
      InterviewCategory
      ScreeningVote
      AssessmentType
      InterviewerRole
      Text
      Source
      QuestionStatus
      QuestionCreatedDate
      QuestionLastUpdated
      RoleType
      CombinedAISummary
      FinalDecision
      EvidenceCategory
      EvidenceText
      URL
      Duration
      ExerciseResponse
      Date
      __typename
    }
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateHireSmartItemSubscriptionVariables,
  APITypes.OnUpdateHireSmartItemSubscription
>;
export const onDeleteHireSmartItem = /* GraphQL */ `subscription OnDeleteHireSmartItem(
  $filter: ModelSubscriptionHireSmartItemFilterInput
  $owner: String
) {
  onDeleteHireSmartItem(filter: $filter, owner: $owner) {
    pk
    sk
    tenantId
    entityType
    data {
      Name
      SSOProvider
      TenantId
      RoleStatus
      CulturalValueStatus
      CompetencyStatus
      Category
      PositionStatus
      CandidateNumber
      Status
      ResumeURL
      LinkedInURL
      ActivityCategory
      StartTime
      RawData
      AISummary
      Vote
      Feedback
      FacilitatorId
      HiringManagerId
      InterviewCategory
      ScreeningVote
      AssessmentType
      InterviewerRole
      Text
      Source
      QuestionStatus
      QuestionCreatedDate
      QuestionLastUpdated
      RoleType
      CombinedAISummary
      FinalDecision
      EvidenceCategory
      EvidenceText
      URL
      Duration
      ExerciseResponse
      Date
      __typename
    }
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHireSmartItemSubscriptionVariables,
  APITypes.OnDeleteHireSmartItemSubscription
>;
