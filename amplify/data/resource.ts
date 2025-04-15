import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Organization: a
    .model({
      tenantId: a.string().required(),
      name: a.string().required(),
      ssoConfig: a.json(),
      contactEmail: a.string(),
      owner: a.string(),
    })
    .secondaryIndexes((index) => [index('tenantId')])
    .authorization((allow) => [
      allow.owner(),
      allow.ownerDefinedIn('tenantId').identityClaim('custom:tenantId').to(['read']),
      allow.groups(['AppAdmins']).to(['create', 'read', 'update', 'delete']),
    ]),

  GlobalRole: a
    .model({
      name: a.string().required(),
      description: a.string(), // Added for role description
      functionalCompetencyIds: a.string().array(),
      questionIds: a.string().array(),
      culturalValueIds: a.string().array(),
    })
    .authorization((allow) => [
      allow.groups(['AppAdmins']).to(['create', 'read', 'update', 'delete']),
      allow.guest().to(['read']),
    ]),

  FunctionalCompetency: a
    .model({
      name: a.string().required(),
      description: a.string(),
      priority: a.enum(['Low', 'Medium', 'High']), // For competency priority
    })
    .authorization((allow) => [
      allow.groups(['AppAdmins']).to(['create', 'read', 'update', 'delete']),
      allow.guest().to(['read']),
    ]),

  Question: a
    .model({
      text: a.string().required(),
      competencyId: a.id(), // Links to FunctionalCompetency
      roleId: a.id(), // Links to GlobalRole
    })
    .authorization((allow) => [
      allow.groups(['AppAdmins']).to(['create', 'read', 'update', 'delete']),
      allow.guest().to(['read']),
    ]),

  Role: a
    .model({
      tenantId: a.string().required(),
      name: a.string().required(),
      baseRoleId: a.id(),
      functionalCompetencyIds: a.string().array(),
      culturalValueIds: a.string().array(),
      questionIds: a.string().array(),
      aiSuggestedQuestions: a.string().array(),
      status: a.string(),
      approver: a.string(),
      owner: a.string(),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.ownerDefinedIn('tenantId').identityClaim('custom:tenantId').to(['read']),
      allow.ownerDefinedIn('approver').to(['update']),
    ]),

  Position: a
    .model({
      tenantId: a.string().required(),
      roleId: a.id().required(),
      name: a.string().required(),
      positionStatus: a.string(),
      customCompetencyIds: a.string().array(),
      customQuestionIds: a.string().array(),
      aiSuggestedQuestions: a.string().array(),
      hiringManager: a.string(),
      approver: a.string(),
      status: a.string(),
      notifications: a.json(),
      owner: a.string(),
      interviewProcessId: a.id(),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.ownerDefinedIn('tenantId').identityClaim('custom:tenantId').to(['read']),
      allow.ownerDefinedIn('approver').to(['update']),
      allow.ownerDefinedIn('sharedWith').to(['read']),
    ]),

  Candidate: a
    .model({
      tenantId: a.string().required(),
      name: a.string().required(),
      email: a.string(),
      phone: a.string(),
      resume: a.string(),
      linkedIn: a.string(),
      aiFitSummary: a.json(),
      recruiter: a.string(),
      notifications: a.json(),
      owner: a.string(),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.ownerDefinedIn('tenantId').identityClaim('custom:tenantId').to(['read']),
      allow.ownerDefinedIn('sharedWith').to(['read']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});