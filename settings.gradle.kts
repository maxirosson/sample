plugins {
    id("com.gradle.enterprise").version("3.7.1")
}

enableFeaturePreview("VERSION_CATALOGS")

dependencyResolutionManagement {
    versionCatalogs {
        create("libs") {
            alias("firebase-core").to("com.google.firebase:firebase-core:1.0.0")
        }
    }
}

include(":app")
include(":core")
