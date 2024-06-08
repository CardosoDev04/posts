using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers;

[ApiController]
[Route("/test")]
public class TestController: ControllerBase
{
    private const string TestString = "Hello World!";
    
    private readonly ILogger<TestController> _logger;
    
    public TestController(ILogger<TestController> logger)
    {
        _logger = logger;
    }

    [HttpGet("string",Name = "GetTest")]
    public string GetTest()
    {
        return TestString;
    }

    [HttpGet("name",Name = "GetRouteName")]
    public string GetRouteName()
    {
        return Url.RouteUrl("GetTest")!;
    }
}