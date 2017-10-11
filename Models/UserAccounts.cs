using System.ComponentModel.DataAnnotations;

namespace Office_Task_Manager.Models
{
    public class UserAccounts
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
    }
}