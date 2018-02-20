pipeline {
  agent {
    label 'master'
  }
  stages {
    stage("Build") {
      steps {
        sh "docker build --tag 381413151357.dkr.ecr.eu-west-1.amazonaws.com/eye-dazzler/designsystem:${GIT_COMMIT} ."
      }
    }
    stage("Push") {
      steps {
        sh '$(AWS_PROFILE=dr-dazzler aws ecr get-login --no-include-email)'
        sh "docker push 381413151357.dkr.ecr.eu-west-1.amazonaws.com/eye-dazzler/designsystem:${GIT_COMMIT}"
      }
    }
    stage("Deploy") {
      steps {
        sh 'cat kubernetes.yaml | sed "s@image: .*@image: 381413151357.dkr.ecr.eu-west-1.amazonaws.com/eye-dazzler/designsystem:${GIT_COMMIT}@" | kubectl apply -f -'
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
