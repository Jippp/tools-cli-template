const types = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'perf',
  'test',
  'ci',
  'chore',
  'revert'
];
const errLog = `<type>(<scope>): <subject>\r\n
  ✨ feat -> 新增feature
  🐛 fix -> 修复bug
  📚 docs -> 仅修改了文档
  💎 style -> 仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
  📦 refactor -> 代码重构，没有加新功能或者修复bug
  🚀 perf -> 优化相关，比如提升性能、体验
  🚨 test -> 测试用例，包括单元测试、集成测试等
  ⚙️ ci -> 构建流程的修改
  ♻️ chore -> 增加依赖库、工具等
  🗑 revert -> 回滚到上一个版本
`;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'lint-error-log-rule': [2, 'always']
  },
  plugins: [
    {
      rules: {
        'lint-error-log-rule': ({ type }) => {
          return [types.includes(type), errLog];
        }
      }
    }
  ]
};
