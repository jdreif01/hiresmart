/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCandidate = /* GraphQL */ `subscription OnCreateCandidate(
  $filter: ModelSubscriptionCandidateFilterInput
  $owner: String
  $sharedWith: String
  $tenantId: String
) {
  onCreateCandidate(
    filter: $filter
    owner: $owner
    sharedWith: $sharedWith
    tenantId: $tenantId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCandidateSubscriptionVariables,
  APITypes.OnCreateCandidateSubscription
>;
export const onCreateGlobalRole = /* GraphQL */ `subscription OnCreateGlobalRole(
  $filter: ModelSubscriptionGlobalRoleFilterInput
) {
  onCreateGlobalRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGlobalRoleSubscriptionVariables,
  APITypes.OnCreateGlobalRoleSubscription
>;
export const onCreateOrganization = /* GraphQL */ `subscription OnCreateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
  $owner: String
  $tenantId: String
) {
  onCreateOrganization(filter: $filter, owner: $owner, tenantId: $tenantId) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrganizationSubscriptionVariables,
  APITypes.OnCreateOrganizationSubscription
>;
export const onCreatePosition = /* GraphQL */ `subscription OnCreatePosition(
  $filter: ModelSubscriptionPositionFilterInput
  $owner: String
  $sharedWith: String
  $tenantId: String
) {
  onCreatePosition(
    filter: $filter
    owner: $owner
    sharedWith: $sharedWith
    tenantId: $tenantId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePositionSubscriptionVariables,
  APITypes.OnCreatePositionSubscription
>;
export const onCreateRole = /* GraphQL */ `subscription OnCreateRole(
  $filter: ModelSubscriptionRoleFilterInput
  $owner: String
  $tenantId: String
) {
  onCreateRole(filter: $filter, owner: $owner, tenantId: $tenantId) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRoleSubscriptionVariables,
  APITypes.OnCreateRoleSubscription
>;
export const onDeleteCandidate = /* GraphQL */ `subscription OnDeleteCandidate(
  $filter: ModelSubscriptionCandidateFilterInput
  $owner: String
  $sharedWith: String
  $tenantId: String
) {
  onDeleteCandidate(
    filter: $filter
    owner: $owner
    sharedWith: $sharedWith
    tenantId: $tenantId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCandidateSubscriptionVariables,
  APITypes.OnDeleteCandidateSubscription
>;
export const onDeleteGlobalRole = /* GraphQL */ `subscription OnDeleteGlobalRole(
  $filter: ModelSubscriptionGlobalRoleFilterInput
) {
  onDeleteGlobalRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGlobalRoleSubscriptionVariables,
  APITypes.OnDeleteGlobalRoleSubscription
>;
export const onDeleteOrganization = /* GraphQL */ `subscription OnDeleteOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
  $owner: String
  $tenantId: String
) {
  onDeleteOrganization(filter: $filter, owner: $owner, tenantId: $tenantId) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrganizationSubscriptionVariables,
  APITypes.OnDeleteOrganizationSubscription
>;
export const onDeletePosition = /* GraphQL */ `subscription OnDeletePosition(
  $filter: ModelSubscriptionPositionFilterInput
  $owner: String
  $sharedWith: String
  $tenantId: String
) {
  onDeletePosition(
    filter: $filter
    owner: $owner
    sharedWith: $sharedWith
    tenantId: $tenantId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePositionSubscriptionVariables,
  APITypes.OnDeletePositionSubscription
>;
export const onDeleteRole = /* GraphQL */ `subscription OnDeleteRole(
  $filter: ModelSubscriptionRoleFilterInput
  $owner: String
  $tenantId: String
) {
  onDeleteRole(filter: $filter, owner: $owner, tenantId: $tenantId) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoleSubscriptionVariables,
  APITypes.OnDeleteRoleSubscription
>;
export const onUpdateCandidate = /* GraphQL */ `subscription OnUpdateCandidate(
  $filter: ModelSubscriptionCandidateFilterInput
  $owner: String
  $sharedWith: String
  $tenantId: String
) {
  onUpdateCandidate(
    filter: $filter
    owner: $owner
    sharedWith: $sharedWith
    tenantId: $tenantId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCandidateSubscriptionVariables,
  APITypes.OnUpdateCandidateSubscription
>;
export const onUpdateGlobalRole = /* GraphQL */ `subscription OnUpdateGlobalRole(
  $filter: ModelSubscriptionGlobalRoleFilterInput
) {
  onUpdateGlobalRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGlobalRoleSubscriptionVariables,
  APITypes.OnUpdateGlobalRoleSubscription
>;
export const onUpdateOrganization = /* GraphQL */ `subscription OnUpdateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
  $owner: String
  $tenantId: String
) {
  onUpdateOrganization(filter: $filter, owner: $owner, tenantId: $tenantId) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrganizationSubscriptionVariables,
  APITypes.OnUpdateOrganizationSubscription
>;
export const onUpdatePosition = /* GraphQL */ `subscription OnUpdatePosition(
  $filter: ModelSubscriptionPositionFilterInput
  $owner: String
  $sharedWith: String
  $tenantId: String
) {
  onUpdatePosition(
    filter: $filter
    owner: $owner
    sharedWith: $sharedWith
    tenantId: $tenantId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePositionSubscriptionVariables,
  APITypes.OnUpdatePositionSubscription
>;
export const onUpdateRole = /* GraphQL */ `subscription OnUpdateRole(
  $filter: ModelSubscriptionRoleFilterInput
  $owner: String
  $tenantId: String
) {
  onUpdateRole(filter: $filter, owner: $owner, tenantId: $tenantId) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRoleSubscriptionVariables,
  APITypes.OnUpdateRoleSubscription
>;
