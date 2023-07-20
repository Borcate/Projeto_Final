pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/Borcate/TCC-EBAC.git'
            }
        }
            stage('Instalar dependendias') {
            steps {
                sh 'npm install -g appium'
            }
                stage('Iniciar') {
            steps {
                sh 'start appium'
            }
        }
                stage('Instalar dependendias') {
            steps {
                sh 'npm init -y'
            }
        }
                stage('Executar testes') {
            steps {
                sh 'npx wdio run ./wdio.conf.js'
            }
                stage('Executar testes') {
            steps {
                sh 'npx allure open allure-report'
            }
        }
    }
}
}
}