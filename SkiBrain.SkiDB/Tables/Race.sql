CREATE TABLE [dbo].[Race]
(
	[Id]               INT            IDENTITY (1, 1) NOT NULL, 
    [Name] NVARCHAR(256) NOT NULL, 
    CONSTRAINT [PK_Race] PRIMARY KEY CLUSTERED ([Id] ASC),
)
