using Blog.Data;
using Blog.Models;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace Blog.Services;

public class PostService
{
    private readonly BlogContext _context;

    public PostService(BlogContext context)
    {
        _context = context;
    }

    public IEnumerable<Post> GetAllPosts() => _context.Posts.AsNoTracking().ToList();
    public Post? GetPost(int id) => _context.Posts.SingleOrDefault(p => p.Id == id);

    public Post AddPost(Post post)
    {
        _context.Posts.Add(post);
        _context.SaveChanges();
        return post;
    }

    public Post? DeletePost(int id)
    {
        var toDelete = GetPost(id);
        if (toDelete == null) return null;
        
        _context.Posts.Remove(toDelete);
        _context.SaveChanges();
        return toDelete;
    }

    public Post? UpdatePost(int id, Post post)
    {
        var toUpdate = GetPost(id);

        if (toUpdate == null) return null;
        
        toUpdate.Content = post.Content;
        
        _context.Posts.Update(toUpdate);
        _context.SaveChanges();
        
        return toUpdate;
    }
}