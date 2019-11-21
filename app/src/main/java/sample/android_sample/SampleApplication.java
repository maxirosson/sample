package sample.android_sample;

import android.app.Application;

import com.sample.core.Util;


public class SampleApplication extends Application {
	
	@Override
	public void onCreate() {
		super.onCreate();
		Util.getName();
	}
}
