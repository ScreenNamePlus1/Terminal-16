import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import android.util.Log;

public class CompilerModule extends ReactContextBaseJavaModule {

    private static final String TAG = "CompilerModule";

    CompilerModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CompilerModule";
    }

    @ReactMethod
    public void compileCode(String code, Promise promise) {
        Log.d(TAG, "Received code for compilation: " + code);
        
        WritableMap response = Arguments.createMap();

        // This is a simplified, functional simulation.
        // In the real app, this logic would call the actual compiler binary.
        if (code.contains("error")) {
            // Simulate a compilation error
            response.putString("status", "error");
            response.putString("message", "Syntax error: a keyword was misspelled. Please check your code.");
        } else {
            // Simulate a successful compilation
            response.putString("status", "success");
            response.putString("message", "Compilation successful! Your program is ready to run.");
        }
        
        promise.resolve(response);
    }
}
