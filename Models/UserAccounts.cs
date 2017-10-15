using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
namespace Office_Task_Manager.Models
{
    public class UserAccount
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        [MinLength(6)]
        public string UserName { get; set; }
        [Required]
        [MaxLength(32)]
        [MinLength(6)]
        public string Password { get; set; }
        [MaxLength(500)]
        public string Token { get; set; }
        public int UserAccountRoleId { get; set; }

        public UserAccountRole UserAccountRole{get;set;}
    }
    public class UserAccountRole
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(30)]
        [MinLength(5)]
        [Required]
        public string Name { get; set; }
        public ICollection<UserAccount> UserAccounts{get;set;}
    }
}