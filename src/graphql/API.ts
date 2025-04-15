/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Candidate = {
  __typename: "Candidate",
  aiFitSummary?: string | null,
  createdAt: string,
  email?: string | null,
  id: string,
  linkedIn?: string | null,
  name: string,
  notifications?: string | null,
  owner?: string | null,
  phone?: string | null,
  recruiter?: string | null,
  resume?: string | null,
  sharedWith?: string | null,
  tenantId: string,
  updatedAt: string,
};

export type FunctionalCompetency = {
  __typename: "FunctionalCompetency",
  createdAt: string,
  description?: string | null,
  id: string,
  name: string,
  priority?: FunctionalCompetencyPriority | null,
  updatedAt: string,
};

export enum FunctionalCompetencyPriority {
  High = "High",
  Low = "Low",
  Medium = "Medium",
}


export type GlobalRole = {
  __typename: "GlobalRole",
  createdAt: string,
  culturalValueIds?: Array< string | null > | null,
  description?: string | null,
  functionalCompetencyIds?: Array< string | null > | null,
  id: string,
  name: string,
  questionIds?: Array< string | null > | null,
  updatedAt: string,
};

export type Organization = {
  __typename: "Organization",
  contactEmail?: string | null,
  createdAt: string,
  id: string,
  name: string,
  owner?: string | null,
  ssoConfig?: string | null,
  tenantId: string,
  updatedAt: string,
};

export type Position = {
  __typename: "Position",
  aiSuggestedQuestions?: Array< string | null > | null,
  approver?: string | null,
  createdAt: string,
  customCompetencyIds?: Array< string | null > | null,
  customQuestionIds?: Array< string | null > | null,
  hiringManager?: string | null,
  id: string,
  interviewProcessId?: string | null,
  name: string,
  notifications?: string | null,
  owner?: string | null,
  positionStatus?: string | null,
  roleId: string,
  sharedWith?: string | null,
  status?: string | null,
  tenantId: string,
  updatedAt: string,
};

export type Question = {
  __typename: "Question",
  competencyId?: string | null,
  createdAt: string,
  id: string,
  roleId?: string | null,
  text: string,
  updatedAt: string,
};

export type Role = {
  __typename: "Role",
  aiSuggestedQuestions?: Array< string | null > | null,
  approver?: string | null,
  baseRoleId?: string | null,
  createdAt: string,
  culturalValueIds?: Array< string | null > | null,
  functionalCompetencyIds?: Array< string | null > | null,
  id: string,
  name: string,
  owner?: string | null,
  questionIds?: Array< string | null > | null,
  status?: string | null,
  tenantId: string,
  updatedAt: string,
};

export type ModelCandidateFilterInput = {
  aiFitSummary?: ModelStringInput | null,
  and?: Array< ModelCandidateFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  linkedIn?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCandidateFilterInput | null,
  notifications?: ModelStringInput | null,
  or?: Array< ModelCandidateFilterInput | null > | null,
  owner?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  recruiter?: ModelStringInput | null,
  resume?: ModelStringInput | null,
  sharedWith?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelCandidateConnection = {
  __typename: "ModelCandidateConnection",
  items:  Array<Candidate | null >,
  nextToken?: string | null,
};

export type ModelFunctionalCompetencyFilterInput = {
  and?: Array< ModelFunctionalCompetencyFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelFunctionalCompetencyFilterInput | null,
  or?: Array< ModelFunctionalCompetencyFilterInput | null > | null,
  priority?: ModelFunctionalCompetencyPriorityInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFunctionalCompetencyPriorityInput = {
  eq?: FunctionalCompetencyPriority | null,
  ne?: FunctionalCompetencyPriority | null,
};

export type ModelFunctionalCompetencyConnection = {
  __typename: "ModelFunctionalCompetencyConnection",
  items:  Array<FunctionalCompetency | null >,
  nextToken?: string | null,
};

export type ModelGlobalRoleFilterInput = {
  and?: Array< ModelGlobalRoleFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  culturalValueIds?: ModelStringInput | null,
  description?: ModelStringInput | null,
  functionalCompetencyIds?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelGlobalRoleFilterInput | null,
  or?: Array< ModelGlobalRoleFilterInput | null > | null,
  questionIds?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelGlobalRoleConnection = {
  __typename: "ModelGlobalRoleConnection",
  items:  Array<GlobalRole | null >,
  nextToken?: string | null,
};

export type ModelOrganizationFilterInput = {
  and?: Array< ModelOrganizationFilterInput | null > | null,
  contactEmail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelOrganizationFilterInput | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  ssoConfig?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type ModelPositionFilterInput = {
  aiSuggestedQuestions?: ModelStringInput | null,
  and?: Array< ModelPositionFilterInput | null > | null,
  approver?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  customCompetencyIds?: ModelStringInput | null,
  customQuestionIds?: ModelStringInput | null,
  hiringManager?: ModelStringInput | null,
  id?: ModelIDInput | null,
  interviewProcessId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelPositionFilterInput | null,
  notifications?: ModelStringInput | null,
  or?: Array< ModelPositionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  positionStatus?: ModelStringInput | null,
  roleId?: ModelIDInput | null,
  sharedWith?: ModelStringInput | null,
  status?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPositionConnection = {
  __typename: "ModelPositionConnection",
  items:  Array<Position | null >,
  nextToken?: string | null,
};

export type ModelQuestionFilterInput = {
  and?: Array< ModelQuestionFilterInput | null > | null,
  competencyId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelQuestionFilterInput | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  roleId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type ModelRoleFilterInput = {
  aiSuggestedQuestions?: ModelStringInput | null,
  and?: Array< ModelRoleFilterInput | null > | null,
  approver?: ModelStringInput | null,
  baseRoleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  culturalValueIds?: ModelStringInput | null,
  functionalCompetencyIds?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelRoleFilterInput | null,
  or?: Array< ModelRoleFilterInput | null > | null,
  owner?: ModelStringInput | null,
  questionIds?: ModelStringInput | null,
  status?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelRoleConnection = {
  __typename: "ModelRoleConnection",
  items:  Array<Role | null >,
  nextToken?: string | null,
};

export type ModelCandidateConditionInput = {
  aiFitSummary?: ModelStringInput | null,
  and?: Array< ModelCandidateConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  linkedIn?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCandidateConditionInput | null,
  notifications?: ModelStringInput | null,
  or?: Array< ModelCandidateConditionInput | null > | null,
  owner?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  recruiter?: ModelStringInput | null,
  resume?: ModelStringInput | null,
  sharedWith?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCandidateInput = {
  aiFitSummary?: string | null,
  email?: string | null,
  id?: string | null,
  linkedIn?: string | null,
  name: string,
  notifications?: string | null,
  owner?: string | null,
  phone?: string | null,
  recruiter?: string | null,
  resume?: string | null,
  tenantId: string,
};

export type ModelFunctionalCompetencyConditionInput = {
  and?: Array< ModelFunctionalCompetencyConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelFunctionalCompetencyConditionInput | null,
  or?: Array< ModelFunctionalCompetencyConditionInput | null > | null,
  priority?: ModelFunctionalCompetencyPriorityInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateFunctionalCompetencyInput = {
  description?: string | null,
  id?: string | null,
  name: string,
  priority?: FunctionalCompetencyPriority | null,
};

export type ModelGlobalRoleConditionInput = {
  and?: Array< ModelGlobalRoleConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  culturalValueIds?: ModelStringInput | null,
  description?: ModelStringInput | null,
  functionalCompetencyIds?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelGlobalRoleConditionInput | null,
  or?: Array< ModelGlobalRoleConditionInput | null > | null,
  questionIds?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateGlobalRoleInput = {
  culturalValueIds?: Array< string | null > | null,
  description?: string | null,
  functionalCompetencyIds?: Array< string | null > | null,
  id?: string | null,
  name: string,
  questionIds?: Array< string | null > | null,
};

export type ModelOrganizationConditionInput = {
  and?: Array< ModelOrganizationConditionInput | null > | null,
  contactEmail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelOrganizationConditionInput | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  owner?: ModelStringInput | null,
  ssoConfig?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateOrganizationInput = {
  contactEmail?: string | null,
  id?: string | null,
  name: string,
  owner?: string | null,
  ssoConfig?: string | null,
  tenantId: string,
};

export type ModelPositionConditionInput = {
  aiSuggestedQuestions?: ModelStringInput | null,
  and?: Array< ModelPositionConditionInput | null > | null,
  approver?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  customCompetencyIds?: ModelStringInput | null,
  customQuestionIds?: ModelStringInput | null,
  hiringManager?: ModelStringInput | null,
  interviewProcessId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelPositionConditionInput | null,
  notifications?: ModelStringInput | null,
  or?: Array< ModelPositionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  positionStatus?: ModelStringInput | null,
  roleId?: ModelIDInput | null,
  sharedWith?: ModelStringInput | null,
  status?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePositionInput = {
  aiSuggestedQuestions?: Array< string | null > | null,
  approver?: string | null,
  customCompetencyIds?: Array< string | null > | null,
  customQuestionIds?: Array< string | null > | null,
  hiringManager?: string | null,
  id?: string | null,
  interviewProcessId?: string | null,
  name: string,
  notifications?: string | null,
  owner?: string | null,
  positionStatus?: string | null,
  roleId: string,
  status?: string | null,
  tenantId: string,
};

export type ModelQuestionConditionInput = {
  and?: Array< ModelQuestionConditionInput | null > | null,
  competencyId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelQuestionConditionInput | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  roleId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateQuestionInput = {
  competencyId?: string | null,
  id?: string | null,
  roleId?: string | null,
  text: string,
};

export type ModelRoleConditionInput = {
  aiSuggestedQuestions?: ModelStringInput | null,
  and?: Array< ModelRoleConditionInput | null > | null,
  approver?: ModelStringInput | null,
  baseRoleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  culturalValueIds?: ModelStringInput | null,
  functionalCompetencyIds?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelRoleConditionInput | null,
  or?: Array< ModelRoleConditionInput | null > | null,
  owner?: ModelStringInput | null,
  questionIds?: ModelStringInput | null,
  status?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateRoleInput = {
  aiSuggestedQuestions?: Array< string | null > | null,
  approver?: string | null,
  baseRoleId?: string | null,
  culturalValueIds?: Array< string | null > | null,
  functionalCompetencyIds?: Array< string | null > | null,
  id?: string | null,
  name: string,
  owner?: string | null,
  questionIds?: Array< string | null > | null,
  status?: string | null,
  tenantId: string,
};

export type DeleteCandidateInput = {
  id: string,
};

export type DeleteFunctionalCompetencyInput = {
  id: string,
};

export type DeleteGlobalRoleInput = {
  id: string,
};

export type DeleteOrganizationInput = {
  id: string,
};

export type DeletePositionInput = {
  id: string,
};

export type DeleteQuestionInput = {
  id: string,
};

export type DeleteRoleInput = {
  id: string,
};

export type UpdateCandidateInput = {
  aiFitSummary?: string | null,
  email?: string | null,
  id: string,
  linkedIn?: string | null,
  name?: string | null,
  notifications?: string | null,
  owner?: string | null,
  phone?: string | null,
  recruiter?: string | null,
  resume?: string | null,
  tenantId?: string | null,
};

export type UpdateFunctionalCompetencyInput = {
  description?: string | null,
  id: string,
  name?: string | null,
  priority?: FunctionalCompetencyPriority | null,
};

export type UpdateGlobalRoleInput = {
  culturalValueIds?: Array< string | null > | null,
  description?: string | null,
  functionalCompetencyIds?: Array< string | null > | null,
  id: string,
  name?: string | null,
  questionIds?: Array< string | null > | null,
};

export type UpdateOrganizationInput = {
  contactEmail?: string | null,
  id: string,
  name?: string | null,
  owner?: string | null,
  ssoConfig?: string | null,
  tenantId?: string | null,
};

export type UpdatePositionInput = {
  aiSuggestedQuestions?: Array< string | null > | null,
  approver?: string | null,
  customCompetencyIds?: Array< string | null > | null,
  customQuestionIds?: Array< string | null > | null,
  hiringManager?: string | null,
  id: string,
  interviewProcessId?: string | null,
  name?: string | null,
  notifications?: string | null,
  owner?: string | null,
  positionStatus?: string | null,
  roleId?: string | null,
  status?: string | null,
  tenantId?: string | null,
};

export type UpdateQuestionInput = {
  competencyId?: string | null,
  id: string,
  roleId?: string | null,
  text?: string | null,
};

export type UpdateRoleInput = {
  aiSuggestedQuestions?: Array< string | null > | null,
  approver?: string | null,
  baseRoleId?: string | null,
  culturalValueIds?: Array< string | null > | null,
  functionalCompetencyIds?: Array< string | null > | null,
  id: string,
  name?: string | null,
  owner?: string | null,
  questionIds?: Array< string | null > | null,
  status?: string | null,
  tenantId?: string | null,
};

export type ModelSubscriptionCandidateFilterInput = {
  aiFitSummary?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCandidateFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  linkedIn?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  notifications?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCandidateFilterInput | null > | null,
  owner?: ModelStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  recruiter?: ModelSubscriptionStringInput | null,
  resume?: ModelSubscriptionStringInput | null,
  sharedWith?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFunctionalCompetencyFilterInput = {
  and?: Array< ModelSubscriptionFunctionalCompetencyFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionFunctionalCompetencyFilterInput | null > | null,
  priority?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionGlobalRoleFilterInput = {
  and?: Array< ModelSubscriptionGlobalRoleFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  culturalValueIds?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  functionalCompetencyIds?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionGlobalRoleFilterInput | null > | null,
  questionIds?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionOrganizationFilterInput = {
  and?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  contactEmail?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  ssoConfig?: ModelSubscriptionStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPositionFilterInput = {
  aiSuggestedQuestions?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPositionFilterInput | null > | null,
  approver?: ModelStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  customCompetencyIds?: ModelSubscriptionStringInput | null,
  customQuestionIds?: ModelSubscriptionStringInput | null,
  hiringManager?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  interviewProcessId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  notifications?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPositionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  positionStatus?: ModelSubscriptionStringInput | null,
  roleId?: ModelSubscriptionIDInput | null,
  sharedWith?: ModelStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionQuestionFilterInput = {
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  competencyId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  roleId?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionRoleFilterInput = {
  aiSuggestedQuestions?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoleFilterInput | null > | null,
  approver?: ModelStringInput | null,
  baseRoleId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  culturalValueIds?: ModelSubscriptionStringInput | null,
  functionalCompetencyIds?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionRoleFilterInput | null > | null,
  owner?: ModelStringInput | null,
  questionIds?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  tenantId?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetCandidateQueryVariables = {
  id: string,
};

export type GetCandidateQuery = {
  getCandidate?:  {
    __typename: "Candidate",
    aiFitSummary?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    linkedIn?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    phone?: string | null,
    recruiter?: string | null,
    resume?: string | null,
    sharedWith?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type GetFunctionalCompetencyQueryVariables = {
  id: string,
};

export type GetFunctionalCompetencyQuery = {
  getFunctionalCompetency?:  {
    __typename: "FunctionalCompetency",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    priority?: FunctionalCompetencyPriority | null,
    updatedAt: string,
  } | null,
};

export type GetGlobalRoleQueryVariables = {
  id: string,
};

export type GetGlobalRoleQuery = {
  getGlobalRole?:  {
    __typename: "GlobalRole",
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    description?: string | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    questionIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    contactEmail?: string | null,
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    ssoConfig?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type GetPositionQueryVariables = {
  id: string,
};

export type GetPositionQuery = {
  getPosition?:  {
    __typename: "Position",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    createdAt: string,
    customCompetencyIds?: Array< string | null > | null,
    customQuestionIds?: Array< string | null > | null,
    hiringManager?: string | null,
    id: string,
    interviewProcessId?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    positionStatus?: string | null,
    roleId: string,
    sharedWith?: string | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    competencyId?: string | null,
    createdAt: string,
    id: string,
    roleId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type GetRoleQueryVariables = {
  id: string,
};

export type GetRoleQuery = {
  getRole?:  {
    __typename: "Role",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    baseRoleId?: string | null,
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    owner?: string | null,
    questionIds?: Array< string | null > | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type ListCandidatesQueryVariables = {
  filter?: ModelCandidateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCandidatesQuery = {
  listCandidates?:  {
    __typename: "ModelCandidateConnection",
    items:  Array< {
      __typename: "Candidate",
      aiFitSummary?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      linkedIn?: string | null,
      name: string,
      notifications?: string | null,
      owner?: string | null,
      phone?: string | null,
      recruiter?: string | null,
      resume?: string | null,
      sharedWith?: string | null,
      tenantId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListFunctionalCompetenciesQueryVariables = {
  filter?: ModelFunctionalCompetencyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFunctionalCompetenciesQuery = {
  listFunctionalCompetencies?:  {
    __typename: "ModelFunctionalCompetencyConnection",
    items:  Array< {
      __typename: "FunctionalCompetency",
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      priority?: FunctionalCompetencyPriority | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListGlobalRolesQueryVariables = {
  filter?: ModelGlobalRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGlobalRolesQuery = {
  listGlobalRoles?:  {
    __typename: "ModelGlobalRoleConnection",
    items:  Array< {
      __typename: "GlobalRole",
      createdAt: string,
      culturalValueIds?: Array< string | null > | null,
      description?: string | null,
      functionalCompetencyIds?: Array< string | null > | null,
      id: string,
      name: string,
      questionIds?: Array< string | null > | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrganizationByTenantIdQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  tenantId: string,
};

export type ListOrganizationByTenantIdQuery = {
  listOrganizationByTenantId?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      contactEmail?: string | null,
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      ssoConfig?: string | null,
      tenantId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      contactEmail?: string | null,
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      ssoConfig?: string | null,
      tenantId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPositionsQueryVariables = {
  filter?: ModelPositionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPositionsQuery = {
  listPositions?:  {
    __typename: "ModelPositionConnection",
    items:  Array< {
      __typename: "Position",
      aiSuggestedQuestions?: Array< string | null > | null,
      approver?: string | null,
      createdAt: string,
      customCompetencyIds?: Array< string | null > | null,
      customQuestionIds?: Array< string | null > | null,
      hiringManager?: string | null,
      id: string,
      interviewProcessId?: string | null,
      name: string,
      notifications?: string | null,
      owner?: string | null,
      positionStatus?: string | null,
      roleId: string,
      sharedWith?: string | null,
      status?: string | null,
      tenantId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      competencyId?: string | null,
      createdAt: string,
      id: string,
      roleId?: string | null,
      text: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRolesQueryVariables = {
  filter?: ModelRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRolesQuery = {
  listRoles?:  {
    __typename: "ModelRoleConnection",
    items:  Array< {
      __typename: "Role",
      aiSuggestedQuestions?: Array< string | null > | null,
      approver?: string | null,
      baseRoleId?: string | null,
      createdAt: string,
      culturalValueIds?: Array< string | null > | null,
      functionalCompetencyIds?: Array< string | null > | null,
      id: string,
      name: string,
      owner?: string | null,
      questionIds?: Array< string | null > | null,
      status?: string | null,
      tenantId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCandidateMutationVariables = {
  condition?: ModelCandidateConditionInput | null,
  input: CreateCandidateInput,
};

export type CreateCandidateMutation = {
  createCandidate?:  {
    __typename: "Candidate",
    aiFitSummary?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    linkedIn?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    phone?: string | null,
    recruiter?: string | null,
    resume?: string | null,
    sharedWith?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type CreateFunctionalCompetencyMutationVariables = {
  condition?: ModelFunctionalCompetencyConditionInput | null,
  input: CreateFunctionalCompetencyInput,
};

export type CreateFunctionalCompetencyMutation = {
  createFunctionalCompetency?:  {
    __typename: "FunctionalCompetency",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    priority?: FunctionalCompetencyPriority | null,
    updatedAt: string,
  } | null,
};

export type CreateGlobalRoleMutationVariables = {
  condition?: ModelGlobalRoleConditionInput | null,
  input: CreateGlobalRoleInput,
};

export type CreateGlobalRoleMutation = {
  createGlobalRole?:  {
    __typename: "GlobalRole",
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    description?: string | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    questionIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  condition?: ModelOrganizationConditionInput | null,
  input: CreateOrganizationInput,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    contactEmail?: string | null,
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    ssoConfig?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type CreatePositionMutationVariables = {
  condition?: ModelPositionConditionInput | null,
  input: CreatePositionInput,
};

export type CreatePositionMutation = {
  createPosition?:  {
    __typename: "Position",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    createdAt: string,
    customCompetencyIds?: Array< string | null > | null,
    customQuestionIds?: Array< string | null > | null,
    hiringManager?: string | null,
    id: string,
    interviewProcessId?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    positionStatus?: string | null,
    roleId: string,
    sharedWith?: string | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: CreateQuestionInput,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    competencyId?: string | null,
    createdAt: string,
    id: string,
    roleId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type CreateRoleMutationVariables = {
  condition?: ModelRoleConditionInput | null,
  input: CreateRoleInput,
};

export type CreateRoleMutation = {
  createRole?:  {
    __typename: "Role",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    baseRoleId?: string | null,
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    owner?: string | null,
    questionIds?: Array< string | null > | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type DeleteCandidateMutationVariables = {
  condition?: ModelCandidateConditionInput | null,
  input: DeleteCandidateInput,
};

export type DeleteCandidateMutation = {
  deleteCandidate?:  {
    __typename: "Candidate",
    aiFitSummary?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    linkedIn?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    phone?: string | null,
    recruiter?: string | null,
    resume?: string | null,
    sharedWith?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type DeleteFunctionalCompetencyMutationVariables = {
  condition?: ModelFunctionalCompetencyConditionInput | null,
  input: DeleteFunctionalCompetencyInput,
};

export type DeleteFunctionalCompetencyMutation = {
  deleteFunctionalCompetency?:  {
    __typename: "FunctionalCompetency",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    priority?: FunctionalCompetencyPriority | null,
    updatedAt: string,
  } | null,
};

export type DeleteGlobalRoleMutationVariables = {
  condition?: ModelGlobalRoleConditionInput | null,
  input: DeleteGlobalRoleInput,
};

export type DeleteGlobalRoleMutation = {
  deleteGlobalRole?:  {
    __typename: "GlobalRole",
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    description?: string | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    questionIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  condition?: ModelOrganizationConditionInput | null,
  input: DeleteOrganizationInput,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    contactEmail?: string | null,
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    ssoConfig?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type DeletePositionMutationVariables = {
  condition?: ModelPositionConditionInput | null,
  input: DeletePositionInput,
};

export type DeletePositionMutation = {
  deletePosition?:  {
    __typename: "Position",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    createdAt: string,
    customCompetencyIds?: Array< string | null > | null,
    customQuestionIds?: Array< string | null > | null,
    hiringManager?: string | null,
    id: string,
    interviewProcessId?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    positionStatus?: string | null,
    roleId: string,
    sharedWith?: string | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: DeleteQuestionInput,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    competencyId?: string | null,
    createdAt: string,
    id: string,
    roleId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoleMutationVariables = {
  condition?: ModelRoleConditionInput | null,
  input: DeleteRoleInput,
};

export type DeleteRoleMutation = {
  deleteRole?:  {
    __typename: "Role",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    baseRoleId?: string | null,
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    owner?: string | null,
    questionIds?: Array< string | null > | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type UpdateCandidateMutationVariables = {
  condition?: ModelCandidateConditionInput | null,
  input: UpdateCandidateInput,
};

export type UpdateCandidateMutation = {
  updateCandidate?:  {
    __typename: "Candidate",
    aiFitSummary?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    linkedIn?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    phone?: string | null,
    recruiter?: string | null,
    resume?: string | null,
    sharedWith?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type UpdateFunctionalCompetencyMutationVariables = {
  condition?: ModelFunctionalCompetencyConditionInput | null,
  input: UpdateFunctionalCompetencyInput,
};

export type UpdateFunctionalCompetencyMutation = {
  updateFunctionalCompetency?:  {
    __typename: "FunctionalCompetency",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    priority?: FunctionalCompetencyPriority | null,
    updatedAt: string,
  } | null,
};

export type UpdateGlobalRoleMutationVariables = {
  condition?: ModelGlobalRoleConditionInput | null,
  input: UpdateGlobalRoleInput,
};

export type UpdateGlobalRoleMutation = {
  updateGlobalRole?:  {
    __typename: "GlobalRole",
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    description?: string | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    questionIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  condition?: ModelOrganizationConditionInput | null,
  input: UpdateOrganizationInput,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    contactEmail?: string | null,
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    ssoConfig?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type UpdatePositionMutationVariables = {
  condition?: ModelPositionConditionInput | null,
  input: UpdatePositionInput,
};

export type UpdatePositionMutation = {
  updatePosition?:  {
    __typename: "Position",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    createdAt: string,
    customCompetencyIds?: Array< string | null > | null,
    customQuestionIds?: Array< string | null > | null,
    hiringManager?: string | null,
    id: string,
    interviewProcessId?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    positionStatus?: string | null,
    roleId: string,
    sharedWith?: string | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: UpdateQuestionInput,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    competencyId?: string | null,
    createdAt: string,
    id: string,
    roleId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoleMutationVariables = {
  condition?: ModelRoleConditionInput | null,
  input: UpdateRoleInput,
};

export type UpdateRoleMutation = {
  updateRole?:  {
    __typename: "Role",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    baseRoleId?: string | null,
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    owner?: string | null,
    questionIds?: Array< string | null > | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCandidateSubscriptionVariables = {
  filter?: ModelSubscriptionCandidateFilterInput | null,
  owner?: string | null,
  sharedWith?: string | null,
  tenantId?: string | null,
};

export type OnCreateCandidateSubscription = {
  onCreateCandidate?:  {
    __typename: "Candidate",
    aiFitSummary?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    linkedIn?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    phone?: string | null,
    recruiter?: string | null,
    resume?: string | null,
    sharedWith?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFunctionalCompetencySubscriptionVariables = {
  filter?: ModelSubscriptionFunctionalCompetencyFilterInput | null,
};

export type OnCreateFunctionalCompetencySubscription = {
  onCreateFunctionalCompetency?:  {
    __typename: "FunctionalCompetency",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    priority?: FunctionalCompetencyPriority | null,
    updatedAt: string,
  } | null,
};

export type OnCreateGlobalRoleSubscriptionVariables = {
  filter?: ModelSubscriptionGlobalRoleFilterInput | null,
};

export type OnCreateGlobalRoleSubscription = {
  onCreateGlobalRole?:  {
    __typename: "GlobalRole",
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    description?: string | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    questionIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
  owner?: string | null,
  tenantId?: string | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    contactEmail?: string | null,
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    ssoConfig?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePositionSubscriptionVariables = {
  filter?: ModelSubscriptionPositionFilterInput | null,
  owner?: string | null,
  sharedWith?: string | null,
  tenantId?: string | null,
};

export type OnCreatePositionSubscription = {
  onCreatePosition?:  {
    __typename: "Position",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    createdAt: string,
    customCompetencyIds?: Array< string | null > | null,
    customQuestionIds?: Array< string | null > | null,
    hiringManager?: string | null,
    id: string,
    interviewProcessId?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    positionStatus?: string | null,
    roleId: string,
    sharedWith?: string | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    competencyId?: string | null,
    createdAt: string,
    id: string,
    roleId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null,
  owner?: string | null,
  tenantId?: string | null,
};

export type OnCreateRoleSubscription = {
  onCreateRole?:  {
    __typename: "Role",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    baseRoleId?: string | null,
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    owner?: string | null,
    questionIds?: Array< string | null > | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCandidateSubscriptionVariables = {
  filter?: ModelSubscriptionCandidateFilterInput | null,
  owner?: string | null,
  sharedWith?: string | null,
  tenantId?: string | null,
};

export type OnDeleteCandidateSubscription = {
  onDeleteCandidate?:  {
    __typename: "Candidate",
    aiFitSummary?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    linkedIn?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    phone?: string | null,
    recruiter?: string | null,
    resume?: string | null,
    sharedWith?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFunctionalCompetencySubscriptionVariables = {
  filter?: ModelSubscriptionFunctionalCompetencyFilterInput | null,
};

export type OnDeleteFunctionalCompetencySubscription = {
  onDeleteFunctionalCompetency?:  {
    __typename: "FunctionalCompetency",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    priority?: FunctionalCompetencyPriority | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteGlobalRoleSubscriptionVariables = {
  filter?: ModelSubscriptionGlobalRoleFilterInput | null,
};

export type OnDeleteGlobalRoleSubscription = {
  onDeleteGlobalRole?:  {
    __typename: "GlobalRole",
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    description?: string | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    questionIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
  owner?: string | null,
  tenantId?: string | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    contactEmail?: string | null,
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    ssoConfig?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePositionSubscriptionVariables = {
  filter?: ModelSubscriptionPositionFilterInput | null,
  owner?: string | null,
  sharedWith?: string | null,
  tenantId?: string | null,
};

export type OnDeletePositionSubscription = {
  onDeletePosition?:  {
    __typename: "Position",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    createdAt: string,
    customCompetencyIds?: Array< string | null > | null,
    customQuestionIds?: Array< string | null > | null,
    hiringManager?: string | null,
    id: string,
    interviewProcessId?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    positionStatus?: string | null,
    roleId: string,
    sharedWith?: string | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    competencyId?: string | null,
    createdAt: string,
    id: string,
    roleId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null,
  owner?: string | null,
  tenantId?: string | null,
};

export type OnDeleteRoleSubscription = {
  onDeleteRole?:  {
    __typename: "Role",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    baseRoleId?: string | null,
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    owner?: string | null,
    questionIds?: Array< string | null > | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCandidateSubscriptionVariables = {
  filter?: ModelSubscriptionCandidateFilterInput | null,
  owner?: string | null,
  sharedWith?: string | null,
  tenantId?: string | null,
};

export type OnUpdateCandidateSubscription = {
  onUpdateCandidate?:  {
    __typename: "Candidate",
    aiFitSummary?: string | null,
    createdAt: string,
    email?: string | null,
    id: string,
    linkedIn?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    phone?: string | null,
    recruiter?: string | null,
    resume?: string | null,
    sharedWith?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFunctionalCompetencySubscriptionVariables = {
  filter?: ModelSubscriptionFunctionalCompetencyFilterInput | null,
};

export type OnUpdateFunctionalCompetencySubscription = {
  onUpdateFunctionalCompetency?:  {
    __typename: "FunctionalCompetency",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    priority?: FunctionalCompetencyPriority | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateGlobalRoleSubscriptionVariables = {
  filter?: ModelSubscriptionGlobalRoleFilterInput | null,
};

export type OnUpdateGlobalRoleSubscription = {
  onUpdateGlobalRole?:  {
    __typename: "GlobalRole",
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    description?: string | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    questionIds?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
  owner?: string | null,
  tenantId?: string | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    contactEmail?: string | null,
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    ssoConfig?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePositionSubscriptionVariables = {
  filter?: ModelSubscriptionPositionFilterInput | null,
  owner?: string | null,
  sharedWith?: string | null,
  tenantId?: string | null,
};

export type OnUpdatePositionSubscription = {
  onUpdatePosition?:  {
    __typename: "Position",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    createdAt: string,
    customCompetencyIds?: Array< string | null > | null,
    customQuestionIds?: Array< string | null > | null,
    hiringManager?: string | null,
    id: string,
    interviewProcessId?: string | null,
    name: string,
    notifications?: string | null,
    owner?: string | null,
    positionStatus?: string | null,
    roleId: string,
    sharedWith?: string | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    competencyId?: string | null,
    createdAt: string,
    id: string,
    roleId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null,
  owner?: string | null,
  tenantId?: string | null,
};

export type OnUpdateRoleSubscription = {
  onUpdateRole?:  {
    __typename: "Role",
    aiSuggestedQuestions?: Array< string | null > | null,
    approver?: string | null,
    baseRoleId?: string | null,
    createdAt: string,
    culturalValueIds?: Array< string | null > | null,
    functionalCompetencyIds?: Array< string | null > | null,
    id: string,
    name: string,
    owner?: string | null,
    questionIds?: Array< string | null > | null,
    status?: string | null,
    tenantId: string,
    updatedAt: string,
  } | null,
};
