using System.ComponentModel.DataAnnotations;

namespace AspNetNextJsMUIApp.Models
{
    public class Student
    {
        [Key]
        [Required]
        [StringLength(50)]
        public required string Id { get; set; }
        [Required]
        [StringLength(150)]
        public required string Name { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        [StringLength(50)]
        public required string Course { get; set; }
        [StringLength(100)]
        public string? Note { get; set; }
    }
}
