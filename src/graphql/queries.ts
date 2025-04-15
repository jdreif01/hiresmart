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
export const getFunctionalCompetency = /* GraphQL */ `query GetFunctionalCompetency($id: ID!) {
  getFunctionalCompetency(id: $id) {
    createdAt
    description
    id
    name
    priority
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFunctionalCompetencyQueryVariables,
  APITypes.GetFunctionalCompetencyQuery
>;
export const getGlobalRole = /* GraphQL */ `query GetGlobalRole($id: ID!) {
  getGlobalRole(id: $id) {
    createdAt
    culturalValueIds
    description
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
    interviewProcessId
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
export const getQuestion = /* GraphQL */ `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    competencyId
    createdAt
    id
    roleId
    text
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetQuestionQueryVariables,
  APITypes.GetQuestionQuery
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
export const listFunctionalCompetencies = /* GraphQL */ `query ListFunctionalCompetencies(
  $filter: ModelFunctionalCompetencyFilterInput
  $limit: Int
  $nextToken: String
) {
  listFunctionalCompetencies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      description
      id
      name
      priority
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFunctionalCompetenciesQueryVariables,
  APITypes.ListFunctionalCompetenciesQuery
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
      description
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
      interviewProcessId
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
export const listQuestions = /* GraphQL */ `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      competencyId
      createdAt
      id
      roleId
      text
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsQueryVariables,
  APITypes.ListQuestionsQuery
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
