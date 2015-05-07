CREATE TABLE [dbo].[VolunteerStatus] (
    [Id]                INT            IDENTITY (1, 1) NOT NULL,
    [TenantId]          INT            NOT NULL,
    [VolunteerRecordId] INT            NOT NULL,
    [RequiredDayCount]  INT            NOT NULL,
    [CommittedDayCount] INT            NOT NULL,
    [PendingDayCount]   INT            NOT NULL,
    [PendingDays]       NVARCHAR (MAX) NOT NULL,
    [CommittedDays]     NVARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_VolunteerStatus] PRIMARY KEY CLUSTERED ([Id] ASC, [TenantId] ASC),
    CONSTRAINT [FK_VolunteerStatus_Tenant] FOREIGN KEY ([TenantId]) REFERENCES [dbo].[Tenant] ([Id]),
    CONSTRAINT [FK_VolunteerStatus_VolunteerRecord] FOREIGN KEY ([VolunteerRecordId]) REFERENCES [dbo].[VolunteerRecord] ([Id])
);

