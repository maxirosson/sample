
enum class Module(val moduleName: String) {

	APP("app"),
	CORE("core");

	val gradlePath = ":$moduleName"
}
