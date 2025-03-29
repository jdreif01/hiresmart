/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getHireSmartItem = /* GraphQL */ `query GetHireSmartItem($id: ID!) {
  getHireSmartItem(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetHireSmartItemQueryVariables,
  APITypes.GetHireSmartItemQuery
>;
export const listHireSmartItems = /* GraphQL */ `query ListHireSmartItems(
  $filter: ModelHireSmartItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listHireSmartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      pk
      sk
      tenantId
      entityType
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHireSmartItemsQueryVariables,
  APITypes.ListHireSmartItemsQuery
>;
export const itemsByTenantId = /* GraphQL */ `query ItemsByTenantId(
  $tenantId: String!
  $sk: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelHireSmartItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByTenantId(
    tenantId: $tenantId
    sk: $sk
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      pk
      sk
      tenantId
      entityType
      data {
        Name
        SSOProvider
        TenantId
      }
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByTenantIdQueryVariables,
  APITypes.ItemsByTenantIdQuery
>;
