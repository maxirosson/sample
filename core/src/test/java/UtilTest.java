import com.sample.core.Util;

import org.junit.Test;

import static junit.framework.Assert.assertEquals;

public class UtilTest {

	@Test
	public void utilTest() {
		assertEquals("Name 1", Util.getName());
		assertEquals("Name 2", new Util().getName2());
	}
}
