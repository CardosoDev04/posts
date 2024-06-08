using Blog.Models;

namespace Blog.Services;

public class PostService
{
    private static List<Post> Posts { get; }
    private static int _nextId = 2;

    static PostService()
    {
        Posts = new List<Post>
        {
            new Post { Id = 1, Author = "John Doe", AuthorId = 1, Content = "X is outdated as hell" },
            new Post { Id = 2, Author = "Jane Doe", AuthorId = 2, Content = "Y is the future" }
        };
    }

    public static List<Post> GetAllPosts() => Posts;
    
    public static Post? GetPost(int id) => Posts.FirstOrDefault(p => p.Id == id);
    
    public static Post AddPost(Post post)
    {
        post.Id = _nextId++;
        Posts.Add(post);
        return post;
    }

    public static Post? DeletePost(Post post)
    {
        var exists = Posts.Any(p => p.Id == post.Id);

        if (!exists) return null;
        
        
        _nextId--;
        Posts.Remove(post);
        return post;
    }

    public static Post? UpdatePost(Post post)
    {
        var exists = Posts.Any(p => p.Id == post.Id);
        
        if (!exists) return null;
        
        var index = Posts.FindIndex(p => p.Id == post.Id);
        
        Posts[index] = post;
        
        return post;
        
    }
}