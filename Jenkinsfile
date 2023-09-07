pipeline {
    agent any
    environment {
      cred= credentials("GithubToken")
    }

    stages {
      stage ("1") {
        steps {
          script{
            println(cred)
            withEnv(["GITAPITOKEN=${cred}"]) {
              res = sh (script: 'curl GET -H \'Authorization: token $GITAPITOKEN\' https://api.github.com/repos/horpehyehmii/workTest/issues/2.body', returnStdout: true).trim()
              echo "$res"
              sh "jq --version"
            }
          }
        }
      }
      stage ("2") {
        when{ not {branch 'master'}}
        steps {
          script{
            dir ("./src/") {
              script{
                sh "ls"
                withEnv(["GITAPITOKEN=${cred}"]) {
                  sh 'npm i && node cli.js $cred'
                }
              }
            }
          }
        }
      }
    }
    
    post {
    always {
      cleanWs()

      dir("${WORKSPACE}@tmp") {
        deleteDir()
      }
      dir("${WORKSPACE}@script") {
        deleteDir()
      }
      dir("${WORKSPACE}@script") {
        deleteDir()
      }
      dir("${WORKSPACE}@script@tmp") {
        deleteDir()
      }
    }
  }
}