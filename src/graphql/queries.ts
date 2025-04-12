/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCandidate = /* GraphQL */ `query GetCandidate($id: ID!) {
  getCandidate(id: $id) {
    aiFitSummary
    createdAt
    email
    id
    linkedIn
    name
    notifications
    owner
    phone
    recruiter
    resume
    sharedWith
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCandidateQueryVariables,
  APITypes.GetCandidateQuery
>;
export const getGlobalRole = /* GraphQL */ `query GetGlobalRole($id: ID!) {
  getGlobalRole(id: $id) {
    createdAt
    culturalValueIds
    functionalCompetencyIds
    id
    name
    questionIds
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGlobalRoleQueryVariables,
  APITypes.GetGlobalRoleQuery
>;
export const getOrganization = /* GraphQL */ `query GetOrganization($id: ID!) {
  getOrganization(id: $id) {
    contactEmail
    createdAt
    id
    name
    owner
    ssoConfig
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrganizationQueryVariables,
  APITypes.GetOrganizationQuery
>;
export const getPosition = /* GraphQL */ `query GetPosition($id: ID!) {
  getPosition(id: $id) {
    aiSuggestedQuestions
    approver
    createdAt
    customCompetencyIds
    customQuestionIds
    hiringManager
    id
    name
    notifications
    owner
    positionStatus
    roleId
    sharedWith
    status
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPositionQueryVariables,
  APITypes.GetPositionQuery
>;
export const getRole = /* GraphQL */ `query GetRole($id: ID!) {
  getRole(id: $id) {
    aiSuggestedQuestions
    approver
    baseRoleId
    createdAt
    culturalValueIds
    functionalCompetencyIds
    id
    name
    owner
    questionIds
    status
    tenantId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRoleQueryVariables, APITypes.GetRoleQuery>;
export const listCandidates = /* GraphQL */ `query ListCandidates(
  $filter: ModelCandidateFilterInput
  $limit: Int
  $nextToken: String
) {
  listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      aiFitSummary
      createdAt
      email
      id
      linkedIn
      name
      notifications
      owner
      phone
      recruiter
      resume
      sharedWith
      tenantId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCandidatesQueryVariables,
  APITypes.ListCandidatesQuery
>;
export const listGlobalRoles = /* GraphQL */ `query ListGlobalRoles(
  $filter: ModelGlobalRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  listGlobalRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      culturalValueIds
      functionalCompetencyIds
      id
      name
      questionIds
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGlobalRolesQueryVariables,
  APITypes.ListGlobalRolesQuery
>;
export const listOrganizationByTenantId = /* GraphQL */ `query ListOrganizationByTenantId(
  $filter: ModelOrganizationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $tenantId: String!
) {
  listOrganizationByTenantId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    tenantId: $tenantId
  ) {
    items {
      contactEmail
      createdAt
      id
      name
      owner
      ssoConfig
      tenantId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrganizationByTenantIdQueryVariables,
  APITypes.ListOrganizationByTenantIdQuery
>;
export const listOrganizations = /* GraphQL */ `query ListOrganizations(
  $filter: ModelOrganizationFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      contactEmail
      createdAt
      id
      name
      owner
      ssoConfig
      tenantId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrganizationsQueryVariables,
  APITypes.ListOrganizationsQuery
>;
export const listPositions = /* GraphQL */ `query ListPositions(
  $filter: ModelPositionFilterInput
  $limit: Int
  $nextToken: String
) {
  listPositions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      aiSuggestedQuestions
      approver
      createdAt
      customCompetencyIds
      customQuestionIds
      hiringManager
      id
      name
      notifications
      owner
      positionStatus
      roleId
      sharedWith
      status
      tenantId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPositionsQueryVariables,
  APITypes.ListPositionsQuery
>;
export const listRoles = /* GraphQL */ `query ListRoles(
  $filter: ModelRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      aiSuggestedQuestions
      approver
      baseRoleId
      createdAt
      culturalValueIds
      functionalCompetencyIds
      id
      name
      owner
      questionIds
      status
      tenantId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRolesQueryVariables, APITypes.ListRolesQuery>;
