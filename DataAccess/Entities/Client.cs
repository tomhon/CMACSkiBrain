using SkiBrain.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SkiBrain.DataAccess.Entities
{
    public class Client
    {
        [Key]
        [MaxLength(64)]
        public string Id { get; set; }
        
        [Required]
        [MaxLength(256)]
        public string Description { get; set; }
      
        public bool Active { get; set; }
        
        public int RefreshTokenLifeTime { get; set; }
        
        [MaxLength(256)]
        public string AllowedOrigin { get; set; }
    }
}
