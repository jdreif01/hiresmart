import { a, defineData } from '@aws-amplify/backend';
import { defineAuth } from '@aws-amplify/backend';

// Define environment-specific configurations
const environment = process.env.AMPLIFY_ENV || 'dev'; // Default to 'dev' for sandbox

// Define redirect URIs based on the environment
const redirectUris = {
  dev: ['http://localhost:5173/organization-list'],
  staging: ['http://localhost:5173/organization-list', 'https://staging.d31vtilon76l6i.amplifyapp.com/organization-list'],
  prod: ['http://localhost:5173/organization-list', 'https://main.<app-id>.amplifyapp.com/organization-list']
};

export const schema = a.schema({
  HireSmartItem: a
    .model({
      id: a.id().required(),
      pk: a.string().required(),
      sk: a.string().required(),
      tenantId: a.string().required(),
      entityType: a.string().required(),
      data: a.customType({
        Name: a.string(),
        SSOProvider: a.string(),
        RoleStatus: a.string(),
        CulturalValueStatus: a.string(),
        CompetencyStatus: a.string(),
        Category: a.string(),
        PositionStatus: a.string(),
        CandidateNumber: a.string(),
        Status: a.string(),
        ResumeURL: a.string(),
        LinkedInURL: a.string(),
        ActivityCategory: a.string(),
        StartTime: a.datetime(),
        RawData: a.string(),
        AISummary: a.string(),
        Vote: a.string(),
        Feedback: a.string(),
        FacilitatorId: a.id(),
        HiringManagerId: a.id(),
        InterviewCategory: a.string(),
        ScreeningVote: a.string(),
        AssessmentType: a.string(),
        InterviewerRole: a.string(),
        Text: a.string(),
        Source: a.string(),
        QuestionStatus: a.string(),
        QuestionCreatedDate: a.datetime(),
        QuestionLastUpdated: a.datetime(),
        RoleType: a.string(),
        CombinedAISummary: a.string(),
        FinalDecision: a.string(),
        EvidenceCategory: a.string(),
        EvidenceText: a.string(),
        URL: a.string(),
        Duration: a.integer(),
        ExerciseResponse: a.string(),
        Date: a.datetime()
      }),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
      owner: a.string()
    })
    .secondaryIndexes((index) => [
      index('tenantId')
        .sortKeys(['sk'])
        .queryField('itemsByTenantId')
    ])
    .authorization((allow) => [
      allow.ownerDefinedIn('owner')
    ])
});

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool'
  }
});