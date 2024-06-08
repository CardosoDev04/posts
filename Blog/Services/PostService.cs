using Blog.Models;

namespace Blog.Services;

public static class PostService
{
    private static List<Post> Posts { get; }
    private static int _nextId = 3;

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

    public static Post? DeletePost(int id)
    {
        var post = PostService.GetPost(id);

        if (post == null) return null;
        
        
        _nextId--;
        Posts.Remove(post);
        return post;
    }

    public static Post? UpdatePost(int id, Post post)
    {
        var toUpdate = PostService.GetPost(id);
        
        if (toUpdate == null) return null;
        
        var index = Posts.FindIndex(p => p.Id == toUpdate.Id);
        
        Posts[index] = post;
        
        return post;
        
    }
}