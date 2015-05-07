CREATE TABLE [dbo].[Parent] (
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [TenantId]  INT            NOT NULL,
    [FirstName] NVARCHAR (64)  NOT NULL,
    [LastName]  NVARCHAR (128) NOT NULL,
    [Email]     NVARCHAR (256) NULL,
    CONSTRAINT [PK_Parent] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Parent_Tenant] FOREIGN KEY ([TenantId]) REFERENCES [dbo].[Tenant] ([Id])
);

