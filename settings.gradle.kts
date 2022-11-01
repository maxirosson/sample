plugins {
    id("com.gradle.enterprise").version("3.6")
}

enableFeaturePreview("VERSION_CATALOGS")

dependencyResolutionManagement {
    versionCatalogs {
        create("libs") {
            alias("firebase-core").to("com.google.firebase:firebase-core:21.1.1")
        }
    }
}

include(":app")
include(":core")
