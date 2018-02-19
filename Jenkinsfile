pipeline {
  agent {
    label 'master'
  }
  stages {
    stage("Build") {
      steps {
        sh 'npm run build'
      }
    }
  }
  post {
    failure {
      step([
        $class: 'Mailer',
        recipients: [emailextrecipients([[$class: 'CulpritsRecipientProvider'], [$class: 'RequesterRecipientProvider']])].join(' ')
      ])
    }
  }
}
