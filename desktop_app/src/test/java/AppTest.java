import com.sample.core.Util;

import org.junit.Test;

import static junit.framework.Assert.assertEquals;

public class AppTest {

	@Test
	public void utilTest() {
		assertEquals("Name 1", Util.getName());
	}
}