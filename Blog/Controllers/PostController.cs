using Blog.Models;
using Blog.Services;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers;

[ApiController]
[Route("/posts")]
public class PostController : ControllerBase
{
    private readonly ILogger<PostController> _logger;

    public PostController(ILogger<PostController> logger)
    {
        _logger = logger;
    }
    
    [HttpGet(Name="GetPosts")]
    public ActionResult<List<Post>> GetPosts()
    {
        return PostService.GetAllPosts();
    }
    
    [HttpGet("{id:int}",Name="GetPost")]
    public ActionResult<Post> GetPost(int id)
    {
        var post = PostService.GetPost(id);
        System.Console.WriteLine(post);
        if (post == null) return NotFound();
        return post;
    }
    
    [HttpPost(Name="CreatePost")]
    public ActionResult<Post> CreatePost([FromBody] Post post)
    {
        var newPost = PostService.AddPost(post);
        return CreatedAtRoute("GetPost",new { id = newPost.Id },newPost);
    }

    [HttpPut("{id:int}", Name = "UpdatePost")]
    public ActionResult<Post> UpdatePost(int id, [FromBody] Post post)
    {
        var updatedPost = PostService.UpdatePost(id,post);
        if (updatedPost == null) return NotFound();
        return Ok(updatedPost);
    }
    
    [HttpDelete("{id:int}",Name="DeletePost")]
    public ActionResult<Post> DeletePost(int id)
    {
        var deletedPost = PostService.DeletePost(id);
        return Ok(deletedPost);
    }
}