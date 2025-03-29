import { a, defineData } from '@aws-amplify/backend';

export const schema = a.schema({
  HireSmartItem: a
    .model({
      pk: a.string().required(), // Partition key: tenantId#entityType#entityId
      sk: a.string().required(), // Sort key: entityType#entityId or relationshipType#relatedEntityId
      tenantId: a.string().required(), // For multi-tenancy
      entityType: a.string().required(), // e.g., Organization, Role, Position
      data: a.customType({
        // Generic attributes for all entities
        Name: a.string(),
        SSOProvider: a.string(), // Enum: GTEG_SSO, AcmeCorp_SSO
        RoleStatus: a.string(), // Enum: Draft, Approved
        CulturalValueStatus: a.string(), // Enum: Draft, Approved
        CompetencyStatus: a.string(), // Enum: Draft, Approved
        Category: a.string(), // Enum: Required, Preferred
        PositionStatus: a.string(), // Enum: Draft, Approved
        CandidateNumber: a.string(),
        Status: a.string(), // Enum: New, InReview, Hired, Rejected
        ResumeURL: a.string(),
        LinkedInURL: a.string(),
        ActivityCategory: a.string(), // Enum: Interview, Assessment, Debrief
        StartTime: a.datetime(),
        RawData: a.string(),
        AISummary: a.string(),
        Vote: a.string(), // Enum: HireDecision
        Feedback: a.string(),
        FacilitatorId: a.id(),
        HiringManagerId: a.id(),
        InterviewCategory: a.string(), // Enum: InterviewCategory
        ScreeningVote: a.string(), // Enum: HireDecision
        AssessmentType: a.string(),
        InterviewerRole: a.string(), // Enum: InterviewerRoleType
        Text: a.string(),
        Source: a.string(), // Enum: QuestionSource
        QuestionStatus: a.string(), // Enum: ApprovalStatus
        QuestionCreatedDate: a.datetime(),
        QuestionLastUpdated: a.datetime(),
        RoleType: a.string(), // Enum: UserRoleType
        CombinedAISummary: a.string(),
        FinalDecision: a.string(), // Enum: HireDecision
        EvidenceCategory: a.string(), // Enum: EvidenceCategory
        EvidenceText: a.string(),
        URL: a.string(),
        Duration: a.integer(),
        ExerciseResponse: a.string(),
        Date: a.datetime()
      })
    })
    .authorization(allow => [
      allow.owner() // Simplified authorization; tenant isolation enforced in app logic
    ])
    .secondaryIndexes((index) => [
      index('tenantId')
        .sortKeys(['sk'])
        .queryField('itemsByTenantId')
    ])
});

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30
    }
  }
});