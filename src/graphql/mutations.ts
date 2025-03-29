/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createHireSmartItem = /* GraphQL */ `mutation CreateHireSmartItem(
  $input: CreateHireSmartItemInput!
  $condition: ModelHireSmartItemConditionInput
) {
  createHireSmartItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHireSmartItemMutationVariables,
  APITypes.CreateHireSmartItemMutation
>;
export const updateHireSmartItem = /* GraphQL */ `mutation UpdateHireSmartItem(
  $input: UpdateHireSmartItemInput!
  $condition: ModelHireSmartItemConditionInput
) {
  updateHireSmartItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHireSmartItemMutationVariables,
  APITypes.UpdateHireSmartItemMutation
>;
export const deleteHireSmartItem = /* GraphQL */ `mutation DeleteHireSmartItem(
  $input: DeleteHireSmartItemInput!
  $condition: ModelHireSmartItemConditionInput
) {
  deleteHireSmartItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHireSmartItemMutationVariables,
  APITypes.DeleteHireSmartItemMutation
>;
