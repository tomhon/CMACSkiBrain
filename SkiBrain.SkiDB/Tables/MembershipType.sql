CREATE TABLE [dbo].[MembershipType] (
    [Id]                    INT            IDENTITY (1, 1) NOT NULL,
    [TenantId]              INT            NOT NULL,
    [Name]                  NVARCHAR (256) NOT NULL,
    [RequiredVolunteerDays] INT            CONSTRAINT [DF_MembershipType_RequiredVolunteerDays] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_MembershipType_1] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_MembershipType_Tenant] FOREIGN KEY ([TenantId]) REFERENCES [dbo].[Tenant] ([Id])
);

