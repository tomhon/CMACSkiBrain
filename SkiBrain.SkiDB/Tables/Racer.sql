CREATE TABLE [dbo].[Racer] (
    [Id]               INT            IDENTITY (1, 1) NOT NULL,
    [TenantId]         INT            NOT NULL,
    [MembershipTypeId] INT            NOT NULL,
    [FirstName]        NVARCHAR (64)  NOT NULL,
    [LastName]         NVARCHAR (128) NOT NULL,
    [DateOfBirth]      DATE           NOT NULL,
    [Gender]           CHAR (1)       NOT NULL,
    CONSTRAINT [PK_Racer] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Racer_MembershipType] FOREIGN KEY ([MembershipTypeId]) REFERENCES [dbo].[MembershipType] ([Id]),
    CONSTRAINT [FK_Racer_Tenant] FOREIGN KEY ([TenantId]) REFERENCES [dbo].[Tenant] ([Id])
);

