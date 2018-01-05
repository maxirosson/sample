public class Main {
	public static final void main(String[] args) {
		System.out.println("Hola " + Util.getName() + " " + com.google.common.base.Ticker.systemTicker().read());
	}
}
