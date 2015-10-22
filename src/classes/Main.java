
import java.math.BigInteger;
import static spark.Spark.*;

public class Main {

    private static final String RETURN_VALUE = "";
    public static void main(String[] args) {
        port(8080);
        spark.Spark.staticFileLocation("/public");
        System.out.println("- SERVER STARTED SUCCESSFULLY -");
        
        get("/", (request, response) -> {
           response.redirect("dist/index.html");
           return RETURN_VALUE;
        });
        
        get("/golf", (request, response) -> {
            response.redirect("MiniGolf/index.html");            
            return RETURN_VALUE;
        });
	get("/runner", (request, response) -> {
	   response.redirect("InfiniteRunner/index.html");
	   return RETURN_VALUE;
	});
        
    }

}
