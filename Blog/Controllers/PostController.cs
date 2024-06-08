using Blog.Data;
using Blog.Models;
using Blog.Services;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers;

[ApiController]
[Route("/posts")]
public class PostController : ControllerBase
{
    private readonly ILogger<PostController> _logger;
    private PostService _postService;

    public PostController(ILogger<PostController> logger, BlogContext context)
    {
        _logger = logger;
        _postService = new PostService(context);
    }
    
    [HttpGet(Name="GetPosts")]
    public ActionResult<IEnumerable<Post>> GetPosts()
    {
        return Ok(_postService.GetAllPosts());
    }
    
    [HttpGet("{id:int}",Name="GetPost")]
    public ActionResult<Post> GetPost(int id)
    {
        var post = _postService.GetPost(id);
        System.Console.WriteLine(post);
        if (post == null) return NotFound();
        return Ok(post);
    }
    
    [HttpPost(Name="CreatePost")]
    public ActionResult<Post> CreatePost([FromBody] Post post)
    {
        var newPost = _postService.AddPost(post);
        return CreatedAtRoute("GetPost",new { id = newPost.Id },newPost);
    }

    [HttpPut("{id:int}", Name = "UpdatePost")]
    public ActionResult<Post> UpdatePost(int id, [FromBody] Post post)
    {
        var updatedPost = _postService.UpdatePost(id,post);
        if (updatedPost == null) return NotFound();
        return Ok(updatedPost);
    }
    
    [HttpDelete("{id:int}",Name="DeletePost")]
    public ActionResult<Post> DeletePost(int id)
    {
        var deletedPost = _postService.DeletePost(id);
        if (deletedPost == null) return NotFound();
        return Ok(deletedPost);
    }
}