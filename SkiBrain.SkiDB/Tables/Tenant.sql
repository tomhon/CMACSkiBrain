CREATE TABLE [dbo].[Tenant] (
    [Id]   INT            IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (256) NOT NULL,
    CONSTRAINT [PK_Tenant] PRIMARY KEY CLUSTERED ([Id] ASC)
);

