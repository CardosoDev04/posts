using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Blog.Models;

public class Post
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int? Id { get; set; }
    
    public string? Author { get; set; }
    [Required]
    public string? Content { get; set; }
    public DateTime PublishedOn { get; set; } = DateTime.Now;
    [Required]
    public int AuthorId { get; set; }
    public int Likes { get; set; } = 0;
    public int Dislikes { get; set; } = 0;
    public int Views { get; set; } = 0;
    public string? ImageUrl { get; set; }
}