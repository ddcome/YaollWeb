<template>
  <footer class="blog-footer">
    <div class="footer-wave">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path class="wave-fill wave-back" d="M0,50 C240,95 480,15 720,55 C960,95 1200,25 1440,65 L1440,100 L0,100 Z" />
        <path class="wave-fill wave-front" d="M0,35 C360,85 720,5 1080,45 C1260,65 1380,30 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>

    <div class="footer-content">
      <div class="container">
        <div class="footer-inner">
          <div class="left-section">
            <p class="copyright">
              © {{ currentYear }} XXX.
            </p>
          </div>

          <div class="center-section">
            <p class="icp-number">
              <i class="fas fa-shield-alt"></i>
              京ICP备2026XXXXXX号-1
            </p>
          </div>

          <div class="right-section">
            <div class="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="mailto:hello@example.com" aria-label="Email" class="social-link">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-link">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.blog-footer {
  position: relative;
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
  margin-top: auto;
}

.footer-wave {
  position: relative;
  width: 100%;
  height: 60px;
  overflow: hidden;
  line-height: 0;
}

.footer-wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

.wave-fill {
  fill: #ffffff;
}

.wave-back {
  fill: #f8fafc;
}

.wave-front {
  fill: #ffffff;
}

.footer-content {
  background: #ffffff;
  padding: 28px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.footer-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.left-section,
.right-section {
  flex: 1;
}

.right-section {
  display: flex;
  justify-content: flex-end;
}

.center-section {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.copyright {
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
}

.icp-number {
  font-size: 13px;
  color: #94a3b8;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.icp-number i {
  font-size: 12px;
  color: #4A7BF7;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  color: #475569;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(74, 123, 247, 0.25);
}

.social-link:nth-child(1):hover { background: #24292e; color: white; }
.social-link:nth-child(2):hover { background: #1DA1F2; color: white; }
.social-link:nth-child(3):hover { background: #4A7BF7; color: white; }
.social-link:nth-child(4):hover { background: #0077B5; color: white; }

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
    gap: 18px;
  }

  .center-section {
    position: static;
    transform: none;
    order: -1;
  }

  .left-section,
  .right-section {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .copyright {
    font-size: 13px;
  }
}
</style>