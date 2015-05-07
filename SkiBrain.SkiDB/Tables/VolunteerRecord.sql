CREATE TABLE [dbo].[VolunteerRecord] (
    [Id]             INT            IDENTITY (1, 1) NOT NULL,
    [TenantId]       INT            NOT NULL,
    [FamilyLastName] NVARCHAR (256) NOT NULL,
    CONSTRAINT [PK_VolunteerRecord] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_VolunteerRecord_Tenant] FOREIGN KEY ([TenantId]) REFERENCES [dbo].[Tenant] ([Id])
);

