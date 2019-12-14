if ($env:APPVEYOR_REPO_BRANCH -eq 'master' -and $env:APPVEYOR_PULL_REQUEST_NUMBER -eq '') {
    try {
        yarn publish:binary
    } catch { "OK" }
}