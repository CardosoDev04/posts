namespace Blog.Models;

public class Post
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Author { get; set; }
    public string? Content { get; set; }
    public DateTime PublishedOn { get; set; } = DateTime.Now;
    public int AuthorId { get; set; }
    public int Likes { get; set; } = 0;
    public int Dislikes { get; set; } = 0;
    public int Views { get; set; } = 0;
    public string? ImageUrl { get; set; }
}