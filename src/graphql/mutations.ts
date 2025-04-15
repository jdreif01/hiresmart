/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCandidate = /* GraphQL */ `mutation CreateCandidate(
  $condition: ModelCandidateConditionInput
  $input: CreateCandidateInput!
) {
  createCandidate(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCandidateMutationVariables,
  APITypes.CreateCandidateMutation
>;
export const createFunctionalCompetency = /* GraphQL */ `mutation CreateFunctionalCompetency(
  $condition: ModelFunctionalCompetencyConditionInput
  $input: CreateFunctionalCompetencyInput!
) {
  createFunctionalCompetency(condition: $condition, input: $input) {
    createdAt
    description
    id
    name
    priority
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFunctionalCompetencyMutationVariables,
  APITypes.CreateFunctionalCompetencyMutation
>;
export const createGlobalRole = /* GraphQL */ `mutation CreateGlobalRole(
  $condition: ModelGlobalRoleConditionInput
  $input: CreateGlobalRoleInput!
) {
  createGlobalRole(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateGlobalRoleMutationVariables,
  APITypes.CreateGlobalRoleMutation
>;
export const createOrganization = /* GraphQL */ `mutation CreateOrganization(
  $condition: ModelOrganizationConditionInput
  $input: CreateOrganizationInput!
) {
  createOrganization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateOrganizationMutationVariables,
  APITypes.CreateOrganizationMutation
>;
export const createPosition = /* GraphQL */ `mutation CreatePosition(
  $condition: ModelPositionConditionInput
  $input: CreatePositionInput!
) {
  createPosition(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePositionMutationVariables,
  APITypes.CreatePositionMutation
>;
export const createQuestion = /* GraphQL */ `mutation CreateQuestion(
  $condition: ModelQuestionConditionInput
  $input: CreateQuestionInput!
) {
  createQuestion(condition: $condition, input: $input) {
    competencyId
    createdAt
    id
    roleId
    text
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionMutationVariables,
  APITypes.CreateQuestionMutation
>;
export const createRole = /* GraphQL */ `mutation CreateRole(
  $condition: ModelRoleConditionInput
  $input: CreateRoleInput!
) {
  createRole(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateRoleMutationVariables,
  APITypes.CreateRoleMutation
>;
export const deleteCandidate = /* GraphQL */ `mutation DeleteCandidate(
  $condition: ModelCandidateConditionInput
  $input: DeleteCandidateInput!
) {
  deleteCandidate(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCandidateMutationVariables,
  APITypes.DeleteCandidateMutation
>;
export const deleteFunctionalCompetency = /* GraphQL */ `mutation DeleteFunctionalCompetency(
  $condition: ModelFunctionalCompetencyConditionInput
  $input: DeleteFunctionalCompetencyInput!
) {
  deleteFunctionalCompetency(condition: $condition, input: $input) {
    createdAt
    description
    id
    name
    priority
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFunctionalCompetencyMutationVariables,
  APITypes.DeleteFunctionalCompetencyMutation
>;
export const deleteGlobalRole = /* GraphQL */ `mutation DeleteGlobalRole(
  $condition: ModelGlobalRoleConditionInput
  $input: DeleteGlobalRoleInput!
) {
  deleteGlobalRole(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteGlobalRoleMutationVariables,
  APITypes.DeleteGlobalRoleMutation
>;
export const deleteOrganization = /* GraphQL */ `mutation DeleteOrganization(
  $condition: ModelOrganizationConditionInput
  $input: DeleteOrganizationInput!
) {
  deleteOrganization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteOrganizationMutationVariables,
  APITypes.DeleteOrganizationMutation
>;
export const deletePosition = /* GraphQL */ `mutation DeletePosition(
  $condition: ModelPositionConditionInput
  $input: DeletePositionInput!
) {
  deletePosition(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePositionMutationVariables,
  APITypes.DeletePositionMutation
>;
export const deleteQuestion = /* GraphQL */ `mutation DeleteQuestion(
  $condition: ModelQuestionConditionInput
  $input: DeleteQuestionInput!
) {
  deleteQuestion(condition: $condition, input: $input) {
    competencyId
    createdAt
    id
    roleId
    text
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionMutationVariables,
  APITypes.DeleteQuestionMutation
>;
export const deleteRole = /* GraphQL */ `mutation DeleteRole(
  $condition: ModelRoleConditionInput
  $input: DeleteRoleInput!
) {
  deleteRole(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteRoleMutationVariables,
  APITypes.DeleteRoleMutation
>;
export const updateCandidate = /* GraphQL */ `mutation UpdateCandidate(
  $condition: ModelCandidateConditionInput
  $input: UpdateCandidateInput!
) {
  updateCandidate(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCandidateMutationVariables,
  APITypes.UpdateCandidateMutation
>;
export const updateFunctionalCompetency = /* GraphQL */ `mutation UpdateFunctionalCompetency(
  $condition: ModelFunctionalCompetencyConditionInput
  $input: UpdateFunctionalCompetencyInput!
) {
  updateFunctionalCompetency(condition: $condition, input: $input) {
    createdAt
    description
    id
    name
    priority
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFunctionalCompetencyMutationVariables,
  APITypes.UpdateFunctionalCompetencyMutation
>;
export const updateGlobalRole = /* GraphQL */ `mutation UpdateGlobalRole(
  $condition: ModelGlobalRoleConditionInput
  $input: UpdateGlobalRoleInput!
) {
  updateGlobalRole(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateGlobalRoleMutationVariables,
  APITypes.UpdateGlobalRoleMutation
>;
export const updateOrganization = /* GraphQL */ `mutation UpdateOrganization(
  $condition: ModelOrganizationConditionInput
  $input: UpdateOrganizationInput!
) {
  updateOrganization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateOrganizationMutationVariables,
  APITypes.UpdateOrganizationMutation
>;
export const updatePosition = /* GraphQL */ `mutation UpdatePosition(
  $condition: ModelPositionConditionInput
  $input: UpdatePositionInput!
) {
  updatePosition(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePositionMutationVariables,
  APITypes.UpdatePositionMutation
>;
export const updateQuestion = /* GraphQL */ `mutation UpdateQuestion(
  $condition: ModelQuestionConditionInput
  $input: UpdateQuestionInput!
) {
  updateQuestion(condition: $condition, input: $input) {
    competencyId
    createdAt
    id
    roleId
    text
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionMutationVariables,
  APITypes.UpdateQuestionMutation
>;
export const updateRole = /* GraphQL */ `mutation UpdateRole(
  $condition: ModelRoleConditionInput
  $input: UpdateRoleInput!
) {
  updateRole(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateRoleMutationVariables,
  APITypes.UpdateRoleMutation
>;
