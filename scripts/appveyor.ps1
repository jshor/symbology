if ($env:APPVEYOR_REPO_BRANCH -eq 'master') {
    try {
        yarn publish:binary
    } catch { "OK" }
}