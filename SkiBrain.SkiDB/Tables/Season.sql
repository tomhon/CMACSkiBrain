﻿CREATE TABLE [dbo].[Season] (
    [Id]   INT            IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (256) NOT NULL,
    CONSTRAINT [PK_Season] PRIMARY KEY CLUSTERED ([Id] ASC)
);

